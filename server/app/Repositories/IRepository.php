<?php

namespace App\Repositories;

interface IRepository
{
    public function findAll($relations = []);

    public function findById($id, $relations = []);

    public function create($data = []);

    public function save($data = []);

    public function update($id, $data);

    public function delete($id);

    public function paginate($perPage = 10, $relations = []);

    public function findBySlug($slug, $relations = []);
}
