import { useState } from "react";
import { PlusLg, Trash3Fill, X } from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/Firebase/firebase";

export default function ProductPage(){
  const [isProduct, setIsProduct] = useState(false);

  const {isLoading, data: products} = useQuery("products", getProducts);

  if(isLoading || !products){
    return <div>Loading</div>
  }

  return(
    <div className="p-4">
      <div className={`absolute top-0 left-0 w-full h-full bg-tertiary/50 backdrop-blur-sm transition center ${isProduct? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex-col space-y-2 card-secondary">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Add Product</h1>
            <button onClick={() => setIsProduct(false)} className="center text-accent bg-transparent round transition hover:bg-primary hover:text-background"><X size={35}/></button>
          </div>
          <div className="flex space-x-4">
            <input type="text" placeholder="Product Name" className="card"/>
            <input type="text" placeholder="Current Stock" className="card"/>
          </div>
          <button className="button-primary">Save</button>
        </div>
      </div>

      <div className="text-5xl font-bold text-primary">Products</div>
      <div className="space-y-4 mt-4">
        {products.map((key) => (
          <div key={key.name} className="w-full flex space-x-4">
            <div className="h-full w-full card !p-2 md:flex justify-between items-center">
              <div className="text-xl font-bold px-2">{key.name}</div>
              <div>
                Stock:
                <input type="number" className="ml-2 w-32 h-full card-secondary" defaultValue={key.stock}></input>
              </div>
            </div>
            <div className="w-16 aspect-square card hover:card-secondary transition center text-accent">
              <Trash3Fill size={25}/>
            </div>
          </div>
        ))}
          <button onClick={() => setIsProduct(true)} className="button-secondary flex space-x-2">
            <PlusLg size={25}/>
            <p>New Product</p>
          </button>
      </div>
    </div>
  )
}