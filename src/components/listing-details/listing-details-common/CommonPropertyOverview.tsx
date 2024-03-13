import type { Property } from "@/@types/property";
import icon_1 from "@/assets/images/icon/icon_47.svg";
import icon_2 from "@/assets/images/icon/icon_48.svg";
import icon_3 from "@/assets/images/icon/icon_49.svg";
import icon_4 from "@/assets/images/icon/icon_50.svg";
import icon_5 from "@/assets/images/icon/icon_51.svg";

interface DataType {
  id: number;
  icon: any;
  title: string;
}
[];

const CommonPropertyOverview = ({ data }: { data: Property["data"][0] }) => {
  const property_overview_data: DataType[] = [
    {
      id: 1,
      icon: icon_1,
      title: `Sqft . ${data?.attributes?.features?.living_space}`,
    },
    {
      id: 2,
      icon: icon_2,
      title: `Bed . ${data?.attributes?.features?.total_rooms}`,
    },
    {
      id: 3,
      icon: icon_3,
      title: `Bath . ${data?.attributes?.features?.total_bathrooms}`,
    },
    {
      id: 4,
      icon: icon_4,
      title: `${data?.attributes?.features?.heating_type || "N/A"}`,
    },
    {
      id: 5,
      icon: icon_5,
      title: `Type . ${data?.attributes?.features?.property_type}`,
    },
  ];

  return (
    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
      {property_overview_data.map((item) => (
        <li key={item.id}>
          <img src={item.icon.src} alt="" className="lazy-img icon" />
          <span className="fs-20 color-dark">{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CommonPropertyOverview;
