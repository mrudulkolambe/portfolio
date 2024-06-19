import StackCard from "./StackCard";


const ImgSlider = () => {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];
  return <>
    <div className="scroll">
      <div className="scroll-c">
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Web Development' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Graphics' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Flutter' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Android Dev' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Web Dev' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Figma' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Illustrator' />
      </div>
      <div className="scroll-c">
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Web Development' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Graphics' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Flutter' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Android Dev' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Web Dev' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Figma' />
        <StackCard img='https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg' title='Illustrator' />
      </div>
    </div>
  </>
}

export default ImgSlider;
