export type Property = {
  data: Array<{
    id: number;
    attributes: {
      name: string;
      price: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      type: "Rent" | "Buy";
      slug: string;
      description: string;
      features: {
        id: number;
        total_rooms: number;
        total_bathrooms: number;
        property_type: string;
        living_space: number;
        heating_type: string;
      };
      address: {
        id: number;
        address: string;
      };
      owner: {
        data: {
          id: number;
          attributes: {
            name: string;
            contact_number: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        };
      };
      images: {
        data: Array<{
          id: number;
          attributes: {
            name: string;
            alternativeText: any;
            caption: any;
            url: string;
          };
        }>;
      };
    };
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
