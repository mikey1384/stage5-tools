import { useInView } from "../hooks/useInView";

type PackProps = {
  title: string;
  price: number;
  packId: "CREDITS_5000" | "CREDITS_10000" | "CREDITS_25000";
};

export function PackCard({ title, price, packId }: PackProps) {
  const [ref, active] = useInView();

  return (
    <form action="/checkout" method="POST">
      <input type="hidden" name="packId" value={packId} />
      <input type="hidden" name="deviceId" value="" />
      <div
        ref={ref}
        data-active={active}
        className="relative bg-black border border-white/5 p-8 rounded-3xl transition-all duration-300 max-w-sm"
      >
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <div className="text-4xl font-light text-white">
              <span className="text-2xl text-gray-500">$</span>
              {price}
            </div>
            <p className="text-sm text-gray-600">~500 minutes of translation</p>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-black bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium"
          >
            Purchase Credits
          </button>
        </div>

        {/* Glass overlay */}
        <div
          className="absolute inset-0 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 
                     opacity-0 transition-opacity duration-500 [data-active]:opacity-100 
                     shadow-glass pointer-events-none z-10"
        />
      </div>
    </form>
  );
}
