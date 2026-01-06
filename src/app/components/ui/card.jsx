function cx(...cls) {
  return cls.filter(Boolean).join(" ")
}

export function Card({ className, ...props }) {
  return <div className={cx("bg-white border border-[#e6eaf0] rounded-xl", className)} {...props} />
}
