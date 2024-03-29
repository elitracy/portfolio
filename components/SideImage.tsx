import Image from "next/image"

const SideImage = (props: { src: string; direction?: string }) => {
  const { src, direction } = props
  return (
    <div className="w-1/2 h-full ml-12 pointer-events-none overflow-hidden">
      <Image
        src={src}
        width="100%"
        height="100%"
        layout="fill"
        objectFit="contain"
        objectPosition={direction ? direction : "right"}
        alt="side-image"
      />
    </div>
  )
}

export default SideImage
