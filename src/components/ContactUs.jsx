
const ContactUs =()=>{
    return (
        <div>
<h1 className="font-bold text-2xl p-4 m-4"> Contact-Us</h1>
<form>
    <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
    <input type="email" className="border border-black p-2 m-2" placeholder="email"/>
    <button className="border border-black bg-gray-100 p-2 m-2 rounded-lg">Submit</button>
</form>

        </div>
    )
}
export default ContactUs;