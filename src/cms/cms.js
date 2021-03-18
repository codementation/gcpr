import CMS from 'netlify-cms-app'
import HomePagePreview from './preview-templates/HomePagePreview'
import ForensicsPreview from './preview-templates/ForensicsPreview'

CMS.registerPreviewStyle("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
CMS.registerPreviewTemplate('index', HomePagePreview)
CMS.registerPreviewTemplate('forensics', ForensicsPreview)
