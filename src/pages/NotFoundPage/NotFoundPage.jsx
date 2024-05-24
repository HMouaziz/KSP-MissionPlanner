import image from '../../assets/images/404.png'
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src={image} className="text-4xl" alt='404'></img>
        <p className="text-lg text-gray-600">Houston, we have a problem...</p>
        <p className="text-md mt-4 text-gray-500">It seems like we couldn&apos;t find the page you were looking for.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;