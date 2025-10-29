// javascript
import React, { useEffect, useState } from 'react';
import './newsletterAdminPanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubscribers, selectNewsletter, sendBroadcast, sendTestBroadcast } from '../store/news-letter-send/news-letter-slice';

const NewsletterAdmin = () => {
 const dispatch = useDispatch();
 const newsletterState = useSelector(selectNewsletter);

 // guard against undefined selector result and provide sane defaults
 const { subscribers = [], fetchStatus = 'idle', sendStatus = 'idle', testStatus = 'idle', error = null } = newsletterState || {};

 const [title, setTitle] = useState('');
 const [content, setContent] = useState('');
 const [testEmail, setTestEmail] = useState('dimitard185@gmail.com');

 useEffect(() => {
  if (fetchStatus === 'idle') {
   dispatch(fetchSubscribers());
  }
 }, [dispatch, fetchStatus]);

 const handleSend = async () => {
  await dispatch(sendBroadcast({ title, content }));
 };

 const handleTestSend = async () => {
  console.log('pesho');
  await dispatch(sendTestBroadcast({ to: testEmail, title, content }));
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
     {fetchStatus === 'loading' && <p>Loading subscribers...</p>}
     {fetchStatus === 'failed' && <p className="error">Failed to load subscribers: {error}</p>}
    </section>

    <section>
     <h2>Нова кампания</h2>
     <div className="newsLetter-admin-panel-text-input">
      <input type="text" placeholder="Заглавие" value={title} onChange={(e) => setTitle(e.target.value)} />
     </div>
     <textarea placeholder="Съдържание" className="newsLetter-admin-panel-text-area" value={content} onChange={(e) => setContent(e.target.value)} />
     <button className="newsLetter-admin-panel" onClick={handleSend} disabled={sendStatus === 'sending'}>
      {sendStatus === 'sending' ? 'Изпращане...' : 'Изпрати бюлетина'}
     </button>
     {sendStatus === 'sent' && <p className="success">✅ Изпратено успешно!</p>}
     {sendStatus === 'error' && <p className="error">❌ Грешка при изпращане: {error}</p>}
    </section>

    <section>
     <h2>📤 Изпрати тестово</h2>
     <div className="newsLetter-admin-panel-text-input">
      <input type="email" placeholder="Тестов имейл" value={testEmail} onChange={(e) => setTestEmail(e.target.value)} />
     </div>
     <button className="newsLetter-admin-panel" onClick={handleTestSend} disabled={testStatus === 'sending'}>
      {testStatus === 'sending' ? 'Изпращане...' : 'Изпрати тестово'}
     </button>
     {testStatus === 'sent' && <p className="success">✅ Изпратено успешно!</p>}
     {testStatus === 'error' && <p className="error">❌ Грешка при изпращане: {error}</p>}
    </section>
   </div>
  </>
 );
};

export default NewsletterAdmin;
