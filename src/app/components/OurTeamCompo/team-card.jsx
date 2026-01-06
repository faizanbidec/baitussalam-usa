export default function TeamCard({ member }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      style={{ aspectRatio: "455/750" }}
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 hover-gra"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 transition-all duration-300">
        <h3 className="text-white font-semibold text-lg mb-1">
          {member.name}
        </h3>
        <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.description}
        </p>
      </div>
    </div>
  );
}
