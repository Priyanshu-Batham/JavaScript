async function fetchNews(categ, country = null) {
    const apiKey = `pub_44558e2b48b708b113a3d00c7feec667b4e24`;

    let url = `https://newsdata.io/api/1/latest?size=8&language=en&apikey=${apiKey}${
      categ !== "" ? `&category=${categ}` : ""
    }${country ? `&country=${country}` : ""}`;

    let req = new Request(url);
    let res = await fetch(req)
    let data = await res.json();
    return data.results;
  }

async function print(){
    let data = await fetchNews('');
    console.log(data);
}

print();