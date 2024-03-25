interface Blog {
    id: number;
    attributes: {
      Title: string;
      Content: string;
      slug: string;
      author: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            url: string;
          };
        };
      };
    };
  }
  
  interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
 export  type BlogResponse = {
    data: Blog[];
    meta: {
      pagination: Pagination;
    };
  }
  