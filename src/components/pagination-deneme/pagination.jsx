Tabii ki, React kullanarak üçüncü parti kütüphane kullanmadan pagination (sayfalama) işlemini nasıl yapabileceğinizi gösterebilirim. Aşağıda basit bir örnek bulunmaktadır:

### 1. `App.js` Dosyası
Bu dosyada, sayfalama için gerekli verileri ve mantığı tanımlayacağız.

```jsx
import React, { useState } from 'react';
import './App.css';

const data = [
  // Örnek veri dizisi
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  // Daha fazla örnek veri ekleyin
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Geçerli sayfada görüntülenecek verileri hesapla
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Sayfa numaraları oluştur
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Sayfa değişim fonksiyonu
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default App;
```

### 2. `App.css` Dosyası
Bu dosyada, sayfalama düğmelerinin stilini tanımlayabilirsiniz.

```css
.App {
  font-family: Arial, sans-serif;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #ccc;
  color: #000;
  cursor: pointer;
}

.page-link:hover {
  background-color: #f0f0f0;
}
```

### Açıklamalar
1. **State ve Veri**: `useState` hook'u ile `currentPage` state'ini tanımlıyoruz ve veri listesini (örnek olarak `data` dizisi) oluşturuyoruz.
2. **Sayfalama Mantığı**: `indexOfLastItem`, `indexOfFirstItem` ve `currentItems` ile geçerli sayfada gösterilecek öğeleri hesaplıyoruz.
3. **Sayfa Numaraları**: `pageNumbers` dizisini, toplam sayfa sayısına göre oluşturuyoruz.
4. **Sayfa Değiştirme**: `paginate` fonksiyonu ile tıklanan sayfa numarasını `currentPage` state'ine ayarlıyoruz.

Bu örneği, ihtiyaçlarınıza göre daha da özelleştirebilirsiniz. Örneğin, ileri ve geri butonları ekleyebilir, aktif sayfa stilini değiştirebilir veya farklı sayfa boyutları sunabilirsiniz.