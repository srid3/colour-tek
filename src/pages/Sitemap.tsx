import sitemap from '../assets/sitemap.json';

const Sitemap = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Sitemap</h1>
      {sitemap.sitemap.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <ul className="space-y-2">
            {category.links.map((item, idx) => (
              <li key={idx} className="hover:bg-gray-100 rounded-md p-2">
                <a 
                  href={item.path} 
                  className="text-blue-600 hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
