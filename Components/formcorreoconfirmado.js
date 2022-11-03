import Input from "./input";

export default function Formcorreoconfirmado() {
    return (<div>
           
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-2xl">CAMBIAR CONTRASEÑA</h3>
            <p className="text-gray-600 pt-2">Por favor introduce tu nueva contraseña</p>
        </section>

        <section className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Contraseña Nueva:</label>
                    <Input  typeinput="passoword" />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Confrimar Contraseña:</label>
                    <Input  typeinput="password" />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Confirmar Contraseña</button>
            </form>
        </section>
    </main>

</div>)
  }