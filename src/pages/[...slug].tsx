// /pages/[...slug].tsx

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Обработка случая, когда slug не определен
  if (!slug) {
    return <p>Loading...</p>;
  }

  // Преобразование slug в массив строк
  const slugArray = Array.isArray(slug) ? slug : [slug];

  // Получение последнего элемента для отображения в качестве контента
  const pageContent = slugArray[slugArray.length - 1];

  return (
    <>
      <Head>
        <title>{pageContent} | Bober CRM</title>
        <meta name="description" content={`This is the ${pageContent} page`} />
      </Head>
      <main>
        <h1>{`Dynamic Page: ${pageContent}`}</h1>
        <p>{`You have navigated to /${slugArray.join('/')}`}</p>
      </main>
    </>
  );
};

export default DynamicPage;
