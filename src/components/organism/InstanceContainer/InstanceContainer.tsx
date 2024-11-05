import getAllInstances from '@/database/actions/getAllInstances'
import Stack from '@mui/material/Stack'
import {Suspense} from 'react'
import InstanceCardSkeleton from './InstanceCardSkeleton'
import InstanceCard from './InstanceCard'

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
