import CMS from 'netlify-cms-app'
import HomePagePreview from './preview-templates/HomePagePreview'
import ForensicsPreview from './preview-templates/ForensicsPreview'

CMS.registerPreviewStyle("public/admin/main.css");
CMS.registerPreviewTemplate('index', HomePagePreview)
CMS.registerPreviewTemplate('forensics', ForensicsPreview)
