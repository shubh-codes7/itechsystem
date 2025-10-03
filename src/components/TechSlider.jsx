
const techs = [
  {
    name: "AWS",
    logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
  },
  {
    name: "Java",
    logo: "https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    logo: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
  {
    name: "Android",
    logo: "https://img.icons8.com/?size=100&id=EgOU93v1DHjU&format=png&color=000000",
  },
  {
    name: "MongoDB",
    logo: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
  },
  {
    name: "PostgreSQL",
    logo: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
  },
  {
    name: "MySQL",
    logo: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  },
  {
    name: "Node.js",
    logo: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
  {
    name: "Express.js",
    logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
  },
  {
    name: "React",
    logo: "https://img.icons8.com/?size=100&id=VXQrhy9fWtm1&format=png&color=000000",
  },
  {
    name: "Python",
    logo: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Django",
    logo: "https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000",
  },
  {
    name: "PHP",
    logo: "https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000",
  },
  {
    name: "Spring Boot",
    logo: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
  },
];

function TechCard({ tech }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={tech.logo}
        alt={tech.name}
        className="h-16 w-16 object-contain"
      />
    </div>
  );
}
// ...existing code...

export default function TechSlider() {
  return (
    <div className="p-8 bg-muted">
      {/* Top row - moving left */}
      <div className="mb-12 relative overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
        <div className="flex animate-scroll-left will-change-transform min-w-max">
          <div className="flex items-stretch gap-8 sm:gap-20">
            {[...techs, ...techs].map((tech, index) => (
              <TechCard key={`top-${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row - moving right */}
      <div className="relative mb-2 overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
        <div className="flex animate-scroll-right will-change-transform min-w-max">
          <div className="flex items-stretch gap-4 sm:gap-20">
            {[...techs, ...techs, ...techs, ...techs].map((tech, index) => (
              <TechCard key={`bottom-${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          transform: translateZ(0);
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}
