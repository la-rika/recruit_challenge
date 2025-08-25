import { useState } from "react";

const App = () => {

  const [walletConnected, setWalletConnected] = useState(false);
  const [paied, setPaied] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0F14] text-gray-100 flex flex-col">
      {paied ?
        <main className="flex-1 px-8 py-6">
          <p className="text-center">
            Thank you for yout purchase!
          </p>

        </main>
        :
        <>
          <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
            <h1 className="font-semibold text-lg">Crypto Checkout</h1>
            <div className="flex gap-3">
              <span className="bg-[#121821] text-sm px-3 py-1 rounded-md border border-gray-700">
                Token Test
              </span>
              {walletConnected ?
                <>
                  <div className=" px-3 py-1 rounded-md  text-green-600">
                    Wallet connected
                  </div>
                  <button onClick={() => setWalletConnected(false)} className="bg-[#121821] hover:bg-gray-700 px-3 py-1 rounded-md border border-red-500 text-red-500">
                    Disconnect wallet
                  </button>
                </>
                :
                <button onClick={() => setWalletConnected(true)} className="bg-[#121821] hover:bg-gray-700 px-3 py-1 rounded-md border border-gray-700">
                  Connect wallet
                </button>
              }

            </div>
          </header>

          <main className="flex-1 px-8 py-6">
            <div>
              <h2 className="text-2xl font-semibold">Crypto Checkout</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#121821] border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium">Payment details</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Network</label>
                    <select className="w-full mt-1 bg-[#0F1620] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none">
                      <option>Token Test</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Token</label>
                    <select className="w-full mt-1 bg-[#0F1620] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none">
                      <option>Select a token</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Amount</label>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full mt-1 bg-[#0F1620] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none"
                    />
                  </div>

                  {walletConnected ?
                    <div className="w-full  text-green-600 py-2 rounded-md mt-2 transition text-center">
                      Wallet connected
                    </div>
                    :
                    <button onClick={() => setWalletConnected(true)} className="w-full bg-[#1f2937] text-gray-300 py-2 rounded-md mt-2 hover:bg-gray-700 transition">
                      Connect wallet
                    </button>
                  }

                </div>
              </div>

              <div className="bg-[#121821] border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium">Order summary</h3>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-gray-300">{walletConnected ? "1,200$" : "-"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fee (sim.)</span>
                    <span className="text-gray-300">{walletConnected ? "12$" : "-"}</span>
                  </div>
                  <hr className="border-gray-800 my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{walletConnected ? "1,212$" : "-"}</span>
                  </div>
                </div>
                {walletConnected &&
                  <button onClick={() => setPaied(true)} className=" absolute right-14 items-end w-40 bg-[#1f2937] text-gray-300 py-2 rounded-md mt-2 hover:bg-gray-700 transition">
                    Pay
                  </button>
                }
              </div>
            </div>
          </main>
        </>
      }

    </div>
  );
}

export default App;
