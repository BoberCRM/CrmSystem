'use client';
export default function NotFound() {
  return (
    <main className="main">
      <div className="main_error">404 - Страницы не существует</div>
      <style jsx>{`
        .main{
          width: 100%;
          height: 100vh;
          background-color: #F1F1F1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .main_error{
          font-size: 30px;
          font-weight: bold;
          color: #C80036;
          margin: auto, auto;
        }
      `}</style>
    </main>
  )
}