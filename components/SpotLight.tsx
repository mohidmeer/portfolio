export default function SpotLight({ clas }: { clas: string }) {
  return <div className={`${clas} absolute rounded-full pointer-events-none`} />;
}
