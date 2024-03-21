<template lang="">
    <div className="p-10 m-5">
        <div className="grid grid-cols-4 gap-4">
            <div v-for="(product,i) in Products" className="bg-slate-400 m-5 p-5">
                <img :src="product.image" alt="Girl in a jacket" width="500" height="600" className="flex justify-center items-center">
                <div className="p-3 mt-10">
                    <p className=" text-sky-600 text-4xl font-bold">{{product.title}}</p>
                </div>
                <div className="p-3 m-5 bg-zinc-500 rounded-md">
                    <p className="text-sky-200 text-3xl">{{product.description}}</p>
                </div>
                <div className="text-3xl font-semibold text-center ">
                    <p>{{product.price}}</p>
                </div>
                <div className='flex justify-end m-5'>
                    <button className="bg-green-600 hover:bg-green-300 p-3 rounded-lg items-end m-3">Buy Now</button>
                    <button className="bg-slate-600 hover:bg-slate-300 p-3 rounded-lg items-end m-3">Add Cart</button>
                    <button className="bg-sky-600 hover:bg-sky-300 p-3 rounded-lg items-end m-3">Info</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Products:[
                {
                    image:"images/Box1.png",
                    title: "Product 01",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "100 $",
                },
                {
                    image:"images/Box2.png",
                    title: "Product 02",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "200 $",
                },
                {
                    image:"images/Box3.png",
                    title: "Product 03",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "300 $",
                },
                {
                    image:"images/Box4.png",
                    title: "Product 04",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "400 $",
                },
                {
                    image:"images/Box5.png",
                    title: "Product 01",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "100 $",
                },
                {
                    image:"images/Box6.png",
                    title: "Product 02",
                    description: "lorem ipsum dolor sit amet, consectetur",
                    price: "200 $",
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>