import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { getAllContacts, updateContactStatus } from '../../../api';
import Loading from '../../Loading/Loading';

const Contact = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const Navigate = useNavigate();
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const handleChange = (panel) => () => {
    if (expanded == panel) {
      setExpanded(() => 0);
    } else {
      setExpanded(() => panel);
    }
  };

  const [Contacts, setContacts] = React.useState();

  React.useEffect(async () => {
    if (!user) Navigate('/auth');
    else {
      setUser(JSON.parse(localStorage.getItem('user')));
      setIsLoading(true);
      try {
        let response = await getAllContacts();
        setIsLoading(false);

        setContacts(response.data.contactList);
      } catch (error) {
        setIsLoading(false);
        Navigate('/badgateway');
      }
    }
  }, []);

  const handleContactStatus = async (id) => {
    try {
      const response = await updateContactStatus(id);

      setContacts((prevContact) =>
        prevContact.map((contact) =>
          contact._id === id ? response.data.contact : contact
        )
      );
    } catch (error) {
      // Navigate('/badgateway');
    }
  };

  return (
    <>
      <div className='admin_contact_header'>
        <h1>Contact Messages</h1>
      </div>

      <div className='admin_contact'>
        {Contacts &&
          Contacts.map((contact) => (
            <Accordion
              onChange={handleChange(contact._id)}
              key={contact._id}
              expanded={expanded === contact._id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Typography sx={{ width: '35%' }}>{contact.name}</Typography>
                <Typography
                  sx={{
                    width: '30%',
                    color: 'text.secondary',
                    display: {
                      sm: 'none',
                      md: 'none',
                      xs: 'inline-block',
                    },
                  }}
                />
                <Typography
                  sx={{
                    width: '50%',
                    color: 'text.secondary',
                    display: {
                      xs: 'none',
                      sm: 'inline-block',
                      md: 'inline-block',
                    },
                  }}
                >
                  {contact.email}
                </Typography>
                <Typography
                  sx={{
                    width: '10%',
                    right: 'right',
                    justifyContent: 'flex-end',
                  }}
                >
                  {contact.progress === 'Pending' ? (
                    <Box sx={{ color: 'error.main', fontWeight: 'bold' }}>
                      {contact.progress}
                    </Box>
                  ) : (
                    <Box sx={{ color: 'success.main', fontWeight: 'bold' }}>
                      {contact.progress}
                    </Box>
                  )}
                  {/* <div className="bg-black text-white">{contact.progress}</div> */}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '50%',
                    display: {
                      sm: 'none',
                      md: 'none',
                      xs: 'inline-block',
                    },
                  }}
                >
                  {contact.email}
                </Typography>
                <Typography>{contact.message}</Typography>
                {contact.progress === 'Pending' ? (
                  <Typography>
                    Resolved the Query :{' '}
                    <Button
                      variant='outlined'
                      onClick={() => handleContactStatus(contact._id)}
                    >
                      {' '}
                      Yes{' '}
                    </Button>
                  </Typography>
                ) : (
                  <Typography>
                    Query Still Pending:{' '}
                    <Button
                      variant='outlined'
                      onClick={() => handleContactStatus(contact._id)}
                    >
                      {' '}
                      Yes{' '}
                    </Button>
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Contact;
