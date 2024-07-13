export const addUser = (values) => {
      const userDBStorage = localStorage.getItem("data");
      let userDb = JSON.parse(userDBStorage);
    
      userDb.data.push([
        values.id,
        values.nameSurname,
        values.company,
        values.email,
        values.phone,
        values.website,
      ]);
      localStorage.setItem("data", JSON.stringify(userDb));
    };
    
    export const orderBy = (data, order) => {
      switch (order) {
        case "name-asc":
          return data.sort((a, b) =>
            a.NameSurname > b.NameSurname
              ? 1
              : b.NameSurname > a.NameSurname
              ? -1
              : 0
          );
        case "name-desc":
          return data
            .sort((a, b) =>
              a.NameSurname > b.NameSurname
                ? 1
                : b.NameSurname > a.NameSurname
                ? -1
                : 0
            )
            .reverse();
        case "year-asc":
          return data.sort((a, b) =>
            a.Date.split("/")[a.Date.split("/").length - 1] >
            b.Date.split("/")[b.Date.split("/").length - 1]
              ? 1
              : b.Date.split("/")[b.Date.split("/").length - 1] >
                a.Date.split("/")[a.Date.split("/").length - 1]
              ? -1
              : 0
          );
        case "year-desc":
          return data
            .sort((a, b) =>
              a.Date.split("/")[a.Date.split("/").length - 1] >
              b.Date.split("/")[b.Date.split("/").length - 1]
                ? 1
                : b.Date.split("/")[b.Date.split("/").length - 1] >
                  a.Date.split("/")[a.Date.split("/").length - 1]
                ? -1
                : 0
            )
            .reverse();
            case "orderBy" :
              break;
      }
    };
   
    export const isTargetContains = (search, target) => {
      return target.toLowerCase().includes(search.toLowerCase());
    };
    
    export const getUsers = ({ search, order, limit, page }) => {
      const userDBStorage = localStorage.getItem("data");
    
      let result = [];
      let count = 0;
      let pages = 0;
      if (userDBStorage) {
        let userDb = JSON.parse(userDBStorage);
    
        userDb = userDb.data.data.map((item) => {
          return {
            id: item[0],
            nameSurname: item[1],
            company: item[2],
            email: item[3],
            phone: item[4],
            website: item[5],
            country:item[6],
            city: item[7],
            date: item[8]
            
          };
        });
    
        result = userDb;
    
        if (search !== "") {
          result = result?.filter((user) => {
            return isTargetContains(search, user.nameSurname);
          });
          count = result?.length;
        }
        if (order !== undefined) {
          result = result.filter((user) =>
            isTargetContains(search, user.NameSurname)
          );
          orderBy(result, order);
        }
    
        if (limit !== undefined && page !== undefined) {
          pages = Math.ceil(count / limit);
          result = result.slice((page - 1) * limit, (page - 1) * limit + limit);
        }
      }
    
      return { data: result, count, pages };
    };