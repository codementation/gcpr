import CMS from 'netlify-cms-app'
import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewStyle("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
CMS.registerPreviewTemplate('index', HomePagePreview)
