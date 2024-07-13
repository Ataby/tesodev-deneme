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
        case "Name ascending":
          return data.sort((a, b) =>
            (a.nameSurname || "").localeCompare(b.nameSurname || "")
          );
        case "Name descending":
          return data.sort((a, b) =>
            (b.nameSurname || "").localeCompare(a.nameSurname || "")
          );
        case "Year ascending":
          return data.sort((a, b) => {
            let [ay1, gun1, yil1] = a.date.split("/");
            let [ay2, gun2, yil2] = b.date.split("/");
    
            let date1 = new Date(yil1, ay1 - 1, gun1);
            let date2 = new Date(yil2, ay2 - 1, gun2);
    
            return date1 - date2;
          });
        case "Year descending":
          return data.sort((a, b) => {
            let [ay1, gun1, yil1] = a.date.split("/");
            let [ay2, gun2, yil2] = b.date.split("/");
    
            let date1 = new Date(yil1, ay1 - 1, gun1);
            let date2 = new Date(yil2, ay2 - 1, gun2);
    
            return date1 - date2;
          }).reverse();
        default:
          // If the 'order' value does not match any case, return data as is
          return data;
      }
    };
    
    
   
    export const isTargetContains = (search, target) => {
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
            isTargetContains(search, user.nameSurname)
          );
          orderBy(result, order);
        }
    
        if (limit !== undefined && page !== undefined) {
          pages = Math.ceil(count / limit);
          result = result.slice((page - 1) * limit, (page - 1) * limit + limit);
        }
      }
    
      return { data: result, count, pages,search };
    };