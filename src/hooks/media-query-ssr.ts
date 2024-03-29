import {useState, useCallback, useEffect} from 'react'

export const useMediaQuerySSR = (width: string | number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', e => updateTarget(e))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', e => updateTarget(e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return targetReached
}
