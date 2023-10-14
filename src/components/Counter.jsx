import { useState } from "preact/hooks";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count => count + 1);
    }

    const handleDecrease = () => {
        setCount(count => count - 1);
    }

    return(
        <div
            class="text-white font-bold hover:scale-100 bg-gray-700 hover:border-gray-500 px-2 flex flex-col"
        >
            <span
                class="flex flex-col items-center px-4 py-2 text-xl"
            >
                {count}
            </span>
            <section
                class="flex flex-row justify-center"
            >
                <button
                    class="border px-4 py-2 text-xl"
                    onClick={handleIncrease}
                >
                    +
                </button>
                <button
                    class="border px-4 py-2 text-xl"
                    onClick={handleDecrease}
                >
                    -
                </button>
            </section>
        </div>
    );
}