<?php

namespace App\Repositories;


abstract class BaseRepository implements IRepository
{
    protected $model;


    public function __construct()
    {
        $this->setModel();
    }

    abstract public function getModel();

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function setModel()
    {
        $this->model = app()->make($this->getModel());
    }

    public function findBySlug($slug, $relations = [])
    {
        return $this->model->where('slug', $slug)->with($relations)->first();
    }

    public function paginate($perPage = 10, $relations = [])
    {
        return $this->model->with($relations)->orderBy('id', 'desc')->paginate($perPage);
    }

    public function findAll($relations = [])
    {
        return $this->model->with($relations)->get();
    }

    public function findById($id, $relations = [])
    {
        return $this->model->with($relations)->findOrFail($id);
    }

    public function create($data = [])
    {
        return $this->model->create($data);
    }

    public function save($data = [])
    {
        return $this->firstOrCreate($data);
    }

    public function update($id, $data)
    {
        $model = $this->findById($id);
        if ($model) {
            $model->update($data);
            return $model;
        }
        return null;
    }

    public function delete($id): bool
    {
        $result = $this->model->findOrFail($id);
        if ($result) {
            $result->delete();
            return true;
        }

        return false;
    }
}
