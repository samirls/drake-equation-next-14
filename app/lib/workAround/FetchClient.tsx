'use client'

import useStore from "@/app/stores/store";

function FetchClient({fetchedComments}:any) {

  const fetchedCommentsStored = useStore((state) => state.fetchedCommentsStored);
  const setFetchedCommentsStored = useStore((state) => state.setFetchedCommentsStored);

  setFetchedCommentsStored(fetchedComments)

  console.log(fetchedCommentsStored)

  return (
    <div></div>
  )
}

export default FetchClient