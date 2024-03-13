import type { Property } from "@/@types/property";

const CommonPropertyFeatureList = ({ data }: { data: Property["data"][0] }) => {
  const property_feature_list = [
    {
      id: 1,
      title: "Property Details",
      feature_list: [
        {
          title: "Bedrooms:",
          count: `${data?.attributes?.features?.total_rooms}`,
        },
        { title: "Property type:", count: `${data?.attributes?.features?.property_type}` },
        {
          title: "Bathrooms:",
          count: `${data?.attributes?.features?.total_bathrooms}`,
        },
        { title: "Living space:", count: `${data?.attributes?.features?.living_space}` },
        { title: "Heating type:", count: `${data?.attributes?.features?.heating_type}` },
        {
          title: "Status:",
          count: `For ${
            data?.attributes?.type.toLowerCase() === "rent" ? "Rent" : "Sale"
          }`,
        },
      ],
    },
  ];
  return (
    <div className="">
      {property_feature_list.map((item) => (
        <div key={item.id}>
          <h2 className="accordion-header"></h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${
              item.id === 1 ? "show" : ""
            }`}
            data-bs-parent="#accordionTwo"
          >
            <div className="accordion-body">
              <div className="feature-list-two">
                <ul className="style-none d-flex flex-wrap justify-content-between">
                  {item.feature_list.map((list, i) => (
                    <li key={i}>
                      <span>{list.title} </span>{" "}
                      <span
                      style={{
                        textTransform: "capitalize",
                      }}
                      className="fw-500 color-dark">{list.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonPropertyFeatureList;
