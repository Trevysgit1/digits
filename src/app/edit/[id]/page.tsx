import { notFound } from 'next/navigation';
import { Contact } from '@prisma/client';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditContactForm from '@/components/EditContactForm';

export default async function EditContactPage({
  params,
}: {
  params: { id: string };
}) {
  // Protect the page
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: {
        email: string;
        id: string;
        name?: string;
        randomKey?: string;
      };
    } | null,
  );

  const id = Number(params.id);

  const contact: Contact | null = await prisma.contact.findUnique({
    where: { id },
  });

  if (!contact) {
    notFound();
  }

  return (
    <main>
      <EditContactForm contact={contact} />
    </main>
  );
}