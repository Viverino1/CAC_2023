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
          <div className="flex w-full space-x-4">
            <div key={key.name} className="card w-full h-16 text-xl">
              <div>{key.name}</div>
            </div>
            <div className="h-16 center text-accent round bg-tertiary transition hover:bg-secondary aspect-square">
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