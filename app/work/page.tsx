import DisplayPostList from 'features/routes/work/components/displayPostsList'

export const metadata = {
  title: '制作物一覧 -木乃宮 ダイ-',
  description: '制作物一覧ページ.',
}

export default function Page() {
  return (
    <section>
      <DisplayPostList />
    </section>
  )
}
