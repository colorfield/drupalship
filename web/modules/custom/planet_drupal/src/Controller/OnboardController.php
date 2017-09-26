<?php

namespace Drupal\planet_drupal\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\entity_tools\EntityService;

/**
 * Class OnboardController.
 */
class OnboardController extends ControllerBase {

  /**
   * Drupal\entity_tools\EntityService definition.
   *
   * @var \Drupal\entity_tools\EntityService
   */
  protected $entityToolsEntity;

  /**
   * Constructs a new OnboardController object.
   */
  public function __construct(EntityService $entity_tools_entity) {
    $this->entityToolsEntity = $entity_tools_entity;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('entity_tools.entity'));
  }

  /**
   * Index.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
    $text = $this->t('Project roadmap');
    $options = ['absolute' => TRUE];
    $url = Url::fromRoute('entity.node.canonical', ['node' => 31], $options);
    $link = Link::fromTextAndUrl($text, $url)->toString();
    drupal_set_message($this->t('This site is a work in progress, view the @project_roadmap', ['@project_roadmap' => $link]), 'warning');
    $build['onboard_page'] = [
      '#theme' => 'onboard',
    ];


    return $build;
  }

}
