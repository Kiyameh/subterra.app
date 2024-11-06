import getAllInstances from '@/database/readActions/getAllInstances'
import Stack from '@mui/material/Stack'
import {Suspense} from 'react'
import InstanceCard from './InstanceCard'
import InstanceCardSkeleton from './InstanceCardSkeleton'

export default async function InstanceContainer() {
  const data = await getAllInstances()

  return (
    //TODO: Revisar suspense
    <Stack direction={{sx: 'column', md: 'row'}}>
      <Suspense fallback={<InstanceCardSkeleton />}>
        {data.content &&
          data.content.map((instance) => (
            <InstanceCard
              key={instance.name}
              instance={instance}
            />
          ))}
      </Suspense>
    </Stack>
  )
}
