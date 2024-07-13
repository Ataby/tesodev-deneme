export const addUser = (values) => {
      const userDBStorage = localStorage.getItem("data");
      let userDb = JSON.parse(userDBStorage)
    
      userDb.data.data.push([
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
            (a.NameSurname || "").localeCompare(b.NameSurname || "")
          );
        case "name-desc":
          return data.sort((a, b) =>
            (b.NameSurname || "").localeCompare(a.NameSurname || "")
          );
        case "year-asc":
          return data.sort((a, b) => {
            const dateA = a.Date ? a.Date.split("/") : [];
            const dateB = b.Date ? b.Date.split("/") : [];
            const yearA = dateA.length === 3 ? parseInt(dateA[2], 10) : 0;
            const yearB = dateB.length === 3 ? parseInt(dateB[2], 10) : 0;
            return yearA - yearB;
          });
        case "year-desc":
          return data.sort((a, b) => {
            const dateA = a.Date ? a.Date.split("/") : [];
            const dateB = b.Date ? b.Date.split("/") : [];
            const yearA = dateA.length === 3 ? parseInt(dateA[2], 10) : 0;
            const yearB = dateB.length === 3 ? parseInt(dateB[2], 10) : 0;
            return yearB - yearA;
          });
        default:
          // If the 'order' value does not match any case, return data as is
          return data;
      }
    };
    
    
   
    export const isTargetContains = (search, target) => {
      console.log(search,"search")
      console.log(target,"target")
      return target?.toLowerCase().includes(search.toLowerCase());
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