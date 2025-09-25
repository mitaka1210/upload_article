import React, { useState, useEffect } from 'react';
import './newsletterAdminPanel.scss';
const NewsletterAdmin = () => {
 const [subscribers, setSubscribers] = useState([]);
 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');
 const [status, setStatus] = useState('idle');
 const [testEmail, setTestEmail] = useState('dimitard185@gmail.com');
 const [testStatus, setTestStatus] = useState('idle');
 const url = `${process.env.REACT_APP_API_URL_PROD}`;
 useEffect(() => {
  fetch(`${url}/api/subscribers`)
   .then((res) => res.json())
   .then((data) => setSubscribers(data.emails));
 }, []);

 const handleSend = async () => {
  setStatus('sending');
  try {
   const res = await fetch(`${url}/api/broadcast`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
   });
   if (res.ok) setStatus('sent');
   else throw new Error();
  } catch {
   setStatus('error');
  }
 };

 const handleTestSend = async () => {
  setTestStatus('sending');
  try {
   const res = await fetch(`${url}/api/broadcast-test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: testEmail, title, content }),
   });
   if (res.ok) setTestStatus('sent');
   else throw new Error();
  } catch {
   setTestStatus('error');
  }
 };

 return (
  <>
   <div className="admin-panel">
    <h1>📣 Админ панел за бюлетина</h1>

    <section>
     <h2>Абонати ({subscribers.length})</h2>
     <ul>
      {subscribers.map((email, i) => (
       <li key={i}>{email}</li>
      ))}
     </ul>
    </section>

    <section>
     <h2>Нова кампания</h2>
     <input type="text" placeholder="Заглавие" value={title} onChange={(e) => setTitle(e.target.value)} />
     <textarea placeholder="Съдържание" value={content} onChange={(e) => setContent(e.target.value)} />
     <button onClick={handleSend} disabled={status === 'sending'}>
      {status === 'sending' ? 'Изпращане...' : 'Изпрати бюлетина'}
     </button>
     {status === 'sent' && <p className="success">✅ Изпратено успешно!</p>}
     {status === 'error' && <p className="error">❌ Грешка при изпращане.</p>}
    </section>
    <section>
     <h2>📤 Изпрати тестово</h2>
     <input type="email" placeholder="Тестов имейл" value={testEmail} onChange={(e) => setTestEmail(e.target.value)} />
     <button onClick={handleTestSend} disabled={testStatus === 'sending'}>
      {testStatus === 'sending' ? 'Изпращане...' : 'Изпрати тестово'}
     </button>
     {testStatus === 'sent' && <p className="success">✅ Изпратено успешно!</p>}
     {testStatus === 'error' && <p className="error">❌ Грешка при изпращане.</p>}
    </section>
   </div>
  </>
 );
};

export default NewsletterAdmin;
