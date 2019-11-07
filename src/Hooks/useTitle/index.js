import { useEffect } from 'react'
import { setTitlePage, clearTitlePage } from 'Utils/titlePage'

export const useTitle = title => {
  // Set Title for tab web
  useEffect(() => {
    setTitlePage(title)
    return () => clearTitlePage()
  }, [])
}
