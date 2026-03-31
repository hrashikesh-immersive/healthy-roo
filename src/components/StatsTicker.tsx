import { Clock, Utensils, Activity, Monitor, AlertTriangle } from "lucide-react";

const stats = [
  { icon: Clock, text: "Hrs/ day of Tuition" },
  { icon: Utensils, text: "Avg Consumption of junk food" },
  { icon: Activity, text: "Min/ Week of Physical activity" },
  { icon: Monitor, text: "Hrs/ day of TV & Gadgets" },
  { icon: AlertTriangle, text: "Higher Stress Level" },
];

const StatsTicker = () => {
  const items = [...stats, ...stats]; // duplicate for seamless loop

  return (
    <div className="bg-primary overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 shrink-0">
            <stat.icon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsTicker;
