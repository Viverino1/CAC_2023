import { PlusLg, Trash3Fill } from "react-bootstrap-icons"

const sampleData: Product[] = [
  {
    name: "Shoes",
    costToMake: 30.00,
    sellingProce: 59.99,
    stock: 13,
  },

  {
    name: "Nike Small Mens T-Shirt",
    costToMake: 3.00,
    sellingProce: 9.99,
    stock: 13,
  }
]

export default function ProductPage(){
  return(
    <div className="p-4">
      <div className="text-5xl font-bold text-primary">Products</div>
      <div className="space-y-4 mt-4">
        {sampleData.map((key) => (
          <div key={key.name} className="w-full flex space-x-4">
            <div className="h-full w-full card !p-2 md:flex justify-between items-center">
              <div className="text-xl font-bold px-2">{key.name}</div>
              <div>
                Stock:
                <input type="number" className="ml-2 w-32 h-full card-secondary"></input>
              </div>
            </div>
            <div className="w-16 aspect-square card hover:card-secondary transition center text-accent">
              <Trash3Fill size={25}/>
            </div>
          </div>
        ))}
        <button className="button-primary flex space-x-2">
          <PlusLg size={25}/>
          <p>New Product</p>
        </button>
      </div>
    </div>
  )
}