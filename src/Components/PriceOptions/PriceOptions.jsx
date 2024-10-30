import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    
    const PriceOptions = [
        { id: 1, name: "Basic", price: 20, duration: "1 month", access: ["Gym"], personalTrainer: false },
        { id: 2, name: "Standard", price: 50, duration: "3 months", access: ["Gym", "Pool", "Classes"], personalTrainer: false },
        { id: 3, name: "Premium", price: 90, duration: "6 months", access: ["Gym", "Pool", "Classes", "Sauna"], personalTrainer: true },
        { id: 4, name: "VIP", price: 150, duration: "12 months", access: ["Gym", "Pool", "Classes", "Sauna", "Private Lounge"], personalTrainer: true, nutritionPlan: true },
        { id: 5, name: "Student Special", price: 15, duration: "1 month", access: ["Gym", "Classes"], personalTrainer: false, discount: "Student" },
        { id: 6, name: "Family Pack", price: 120, duration: "6 months", access: ["Gym", "Pool", "Classes"], personalTrainer: false, familyAccess: true },
        { id: 7, name: "Corporate", price: 500, duration: "12 months", access: ["Gym", "Pool", "Classes", "Sauna", "Private Lounge"], personalTrainer: true, corporateDiscount: true },
        { id: 8, name: "Weekend Warrior", price: 30, duration: "1 month", access: ["Gym"], personalTrainer: false, limitedAccess: "Weekends only" },
        { id: 9, name: "Summer Special", price: 40, duration: "3 months", access: ["Gym", "Pool"], personalTrainer: false, seasonal: true },
        { id: 10, name: "Silver Membership", price: 100, duration: "6 months", access: ["Gym", "Pool", "Classes"], personalTrainer: true }
      ];

    return (
        <div className="p-5">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {
                PriceOptions.map(option=><PriceOption key={option.id} option={option}/>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;