import { pipeline } from '@xenova/transformers'
import { useEffect } from 'react'

const Demo = () => {
  const test = async () => {
    // Allocate a pipeline for sentiment-analysis
    const pipe = await pipeline('sentiment-analysis')
    const out = await pipe('我喜欢你')
    console.log(out)
    // [{'label': 'POSITIVE', 'score': 0.999817686}]
  }

  useEffect(() => {
    test()
  }, [])

  return <div>Demo</div>
}

export default Demo
