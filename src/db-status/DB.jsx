import { useEffect, useState } from 'react';

function DBStatus() {
 const [status, setStatus] = useState(null);

 useEffect(() => {
  fetch('/api/db-status')
   .then((res) => res.json())
   .then((data) => setStatus(data))
   .catch((err) => setStatus({ status: 'error', message: err.message }));
 }, []);

 if (!status) return <p>Проверявам базата...</p>;

 return <div>{status.status === 'ok' ? <p>✅ Активна база: {status.activeDB === 'primary' ? 'Основна' : 'NeonDB'}</p> : <p>⚠️ Проблем с базата: {status.message}</p>}</div>;
}

export default DBStatus;
