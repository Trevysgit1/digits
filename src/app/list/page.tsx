import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { Contact } from '@prisma/client';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';

/** Render a list of contacts for the logged in user. */
const ListPage = async () => {
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

  const owner = session?.user?.email ?? '';

  const contacts: Contact[] = await prisma.contact.findMany({
    where: {
      owner,
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">List Contacts</h1>

              <Row xs={1} md={2} lg={3} className="g-4">
                {contacts.map((contact, index) => (
                  <Col key={index}>
                    <ContactCard contact={contact} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ListPage;