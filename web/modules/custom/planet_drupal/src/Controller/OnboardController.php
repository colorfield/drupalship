<?php

namespace Drupal\planet_drupal\Controller;

use Drupal\Core\Controller\ControllerBase;
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
    return new static(
      $container->get('entity_tools.entity')
    );
  }

  /**
   * Index.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
//    return [
//      '#type' => 'markup',
//      '#markup' => $this->t('Implement method: index')
//    ];
      $build['onboard_page'] = [
        '#theme' => 'onboard',
      ];
      return $build;
  }

}
