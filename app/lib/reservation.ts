'use server'

import { db } from '@/app/db'
import { ReservationTable } from '@/app/db/schema' 
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getReservations() {
  return await db.select().from(ReservationTable)
}

export async function addReservation(form: FormData) {
  await db.insert(ReservationTable).values({
    title: String(form.get('title')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editReservation(form: FormData) {
  await db
    .update(ReservationTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(ReservationTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

// export async function removeTask(id: string) {
//   await db.delete(tasksTable).where(eq(tasksTable.id, id))
//   redirect((await headers()).get('referer') ?? '/')
// }

export async function removeReservation(form: FormData) {
  const id = String(form.get('id'))
  await db.delete(ReservationTable).where(eq(ReservationTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}
