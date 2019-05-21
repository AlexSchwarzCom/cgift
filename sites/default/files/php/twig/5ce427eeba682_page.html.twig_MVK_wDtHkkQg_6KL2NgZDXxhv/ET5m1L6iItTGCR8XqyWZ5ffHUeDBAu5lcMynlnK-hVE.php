<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/alex_theme/templates/basic/page.html.twig */
class __TwigTemplate_61288eccaac23e2016d8bd7621ac0a58d5d797d0b15ef37be60bc1bc61e964a4 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 54, "trans" => 127];
        $filters = ["date" => 147];
        $functions = ["drupal_entity" => 79, "attach_library" => 126];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'trans'],
                ['date'],
                ['drupal_entity', 'attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 53
        echo "
 ";
        // line 54
        if ($this->getAttribute(($context["page"] ?? null), "popups", [])) {
            // line 55
            echo " <div class=\"background-black\"></div>
 \t\t<div class=\"popup-wrapper\">
 \t\t\t <div class=\"close-btn\">X</div>
   \t\t\t";
            // line 58
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "popups", [])), "html", null, true);
            echo "
 \t\t</div>
";
        }
        // line 61
        echo "
<div class=\"layout-container\">
  <div class=\"content-container\">

   <header role=\"banner\" id=\"header\">

         ";
        // line 67
        if ($this->getAttribute(($context["page"] ?? null), "header", [])) {
            // line 68
            echo "         \t<div class=\"header\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
            echo "</div>
         ";
        }
        // line 70
        echo "
 <div class=\"wrapper\">
        <div class=\"outer-header\">
\t       <div class=\"header\">


\t          <div class=\"mobile-header\">
\t             <a href=\"";
        // line 77
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "\" title=\"Startseite\" rel=\"home\" id=\"logo\" class=\"logo logo_mobil\"><img src=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/logo/CGift-Logo.svg\" alt=\"Startseite\" /></a>
                 
                 ";
        // line 79
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\twig_tweak\TwigExtension')->drupalEntity("block", "seitennavigation", null, null, false), "html", null, true);
        echo "
\t          </div>
\t          ";
        // line 81
        if ($this->getAttribute(($context["page"] ?? null), "header1", [])) {
            echo "<div class=\"header1\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header1", [])), "html", null, true);
            echo "</div>";
        }
        // line 82
        echo "\t          <a href=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo "\" title=\"Startseite\" rel=\"home\" id=\"logo\" class=\"logo\"><img src=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/logo/CGift-Logo-Claim.svg\" alt=\"Startseite\" /></a> 
\t          <div class=\"main-menus-links column\">
\t          \t   ";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "hauptmenue", [])), "html", null, true);
        echo "
\t          </div>

            <div class=\"language-column column\">";
        // line 87
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header2", [])), "html", null, true);
        echo "</div>
        </div>
       </div>


   </header>

    <div class=\"clear\"></div>

\t\t<!-- ###################### MAIN CONTENT AREA ###################### -->
\t\t  <main role=\"main\">
\t\t    <a id=\"main-content\" tabindex=\"-1\"></a>
\t\t      ";
        // line 99
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
                <div class=\"clear\"></div>
\t\t  </main>

<div class=\"footer-line\"></div>
<!-- ###################### FOOTER  ###################### -->
  <footer role=\"contentinfo\" class=\"footer\">

  \t<div class=\"wrapper\">

   \t  <div class=\"to-the-top\">
      \t<a class=\"topper\" href=\"#header\">
      \t\t<span class=\"topper_arrow\"><img src=\"";
        // line 111
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/icons/topper.svg\" /></span>
    \t\t  <span class=\"topper-text\">TOP</span>
    \t  </a>
  \t\t</div>

\t\t<div class=\"flexbox-container\">
\t         \t<div class=\"footer1\">
\t          \t\t<img src=\"";
        // line 118
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/icons/CGift-Standort.Footer.svg\" alt=\"Startseite\" />
\t           </div>

\t           \t<div class=\"footer-kontakt\">";
        // line 121
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
        echo "</div>


\t         \t";
        // line 124
        if (($context["is_front"] ?? null)) {
            // line 125
            echo "
\t         \t<div id=\"front-webform\" class=\"footer2\">";
            // line 126
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("alex_theme/kontaktformular-css"), "html", null, true);
            echo "
\t         \t<h3>";
            // line 127
            echo t("Jetzt kostenlose Erstberatung vereinbaren", array());
            echo "</h3>
\t         \t";
            // line 128
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer3", [])), "html", null, true);
            echo "
\t         \t</div>

\t            ";
        } else {
            // line 132
            echo "
\t         \t<div class=\"footer2 flexbox-container\">
\t\t            <span class=\"app-icon\" style=\"background-image: url(";
            // line 134
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
            echo "/images/icons/app-icon-apple-white.svg)\"></span>
\t\t            <span class=\"app-icon\"style=\"background-image: url(";
            // line 135
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)), "html", null, true);
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
            echo "/images/icons/app-icon-android-white.svg)\"></span>
\t\t            <p>Jetzt kostenlos unsere<br />CGift App downloaden</p>
\t          \t</div>

\t          ";
        }
        // line 140
        echo "
\t\t   </div>


            <div class=\"clear\"></div>
         \t    <div class=\"footer-bottom\">
                <div class=\"bottom-nav column\">";
        // line 146
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "agbmenue", [])), "html", null, true);
        echo "</div>
                <div class=\"copy column\"><span>&copy; ";
        // line 147
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true);
        echo "</span> ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "firmenname", [])), "html", null, true);
        echo "</span> Webdesign by <a href=\"https://www.geschmackslabor.de/\" target=\"_blank\">geschmackslabor.de</a></div>
              </div>

  </footer>

 </div>";
        // line 153
        echo " </div>";
    }

    public function getTemplateName()
    {
        return "themes/custom/alex_theme/templates/basic/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  244 => 153,  234 => 147,  230 => 146,  222 => 140,  213 => 135,  208 => 134,  204 => 132,  197 => 128,  193 => 127,  189 => 126,  186 => 125,  184 => 124,  178 => 121,  171 => 118,  160 => 111,  145 => 99,  130 => 87,  124 => 84,  115 => 82,  109 => 81,  104 => 79,  96 => 77,  87 => 70,  81 => 68,  79 => 67,  71 => 61,  65 => 58,  60 => 55,  58 => 54,  55 => 53,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/alex_theme/templates/basic/page.html.twig", "C:\\xampp\\htdocs\\cgift\\themes\\custom\\alex_theme\\templates\\basic\\page.html.twig");
    }
}
